# Worker Pool: A Concurrency Pattern for Efficient Task Management

Workerpool offers an easy way to create a pool of workers for both dynamically offloading computations as well as managing a pool of dedicated workers. 

Workerpool basically implements a thread pool pattern. There is a pool of workers to execute tasks. New tasks are put in a queue. A worker executes one task at a time, and once finished, picks a new task from the queue. Workers can be accessed via a natural, promise based proxy, as if they are available straight in the main application.

Workerpool are useful for managing a pool of workers to perform tasks concurrently.  They help to control the number of goroutines running simultaneously, preventing resource exhaustion and improving performance. 

## Belongs to which Design Pattern?

The worker pool is a concurrency design pattern that manages a pool of workers to execute tasks in parallel. It's a popular pattern in programming languages that use concurrency, such as Go.

![scaler-workerpool](https://www.scaler.com/topics/images/what-is-workerpool-in-golang_thumbnail.webp)

Worker Pool is a design pattern that involves creating a pool of worker threads or processes and assigning tasks to them for parallel execution. This pattern provides a solution for managing concurrent execution and controlling the number of simultaneous tasks being processed.

## How workerpool works?

- **Worker Pool Creation:** A pool of worker threads or processes is created, each ready to pick up tasks from a shared queue.
- **Task Submission:** New tasks are added to the queue.
- **Task Assignment:** A worker thread or process picks up a task from the queue and executes it.
- **Task Completion:** Once a task is finished, the worker becomes available to pick up the next task.

Note: **Hit-and-Forget** Method are commonly used here in such scenarios.

## Key Benefits of the Worker Pool Pattern:

- **Improved Performance:** By distributing tasks across multiple workers, you can significantly improve the overall performance of your application.
- **Efficient Resource Utilization:** The worker pool ensures that system resources are used efficiently, as workers can be reused for multiple tasks.
- **Simplified Concurrency Management:** The worker pool pattern abstracts away the complexities of thread or process management, making it easier to write concurrent code.
- **Scalability:** The worker pool can be scaled to handle increasing workloads by adding more workers to the pool.


## Easiest Implementation in Golang

- Create a file `main.go` and add the following code.
- Create the `Task` interface which will holds the necessary methods to implement.

    ```go
    // Task interface to be implement by the different tasks.
    type Task interface {
	    Process()
    }
    ```

- Create few tasks / workitems that to mimic the functionality. I've create `EmailTask` and `TodoFetcherTask`.
    - `EmailTask` - is to demo sending email items as tasks.

    ```go
    // EmailTask construct to send email
    type EmailTask struct {
        ID         int
        Recipients []string
        Msg        string
        From string
    }

    func (e *EmailTask) Process() {
        time.Sleep(100 * time.Millisecond)
        fmt.Println("EmailTask", e.ID, "has been completed.")
    }
    ```

    - `TodoFetcher` - is to fetch the data from public api.

    ```go
    // TodoFetchTask construct to fetch data from public api
    type TodoFetchTask struct {
        ID     int
        ApiURL string
        data   any
    }

    func (t *TodoFetchTask) Process() {
        res, err := http.Get(t.ApiURL)
        LogError(err)

        // res.body to t.data
        defer res.Body.Close()
        json.NewDecoder(res.Body).Decode(&t.data)

        fmt.Println("task", t.ID, t.data, "has been completed.")

    }
    ```

- **Workerpool Implementation**

- Create a `Workerpool` struct to hold the infomation of tasks, workers and concurrency limits.
    ```go
    // WorkerPool struct to manage the tasks and workers.
    type WorkerPool struct {
        tasks       []Task
        Concurrency int

        tasksChan chan Task
        wg        sync.WaitGroup
    }
    ```

- `Worker` function which will help to pull out the tasks from the tasks channel. and process and wait until its completion.
    ```go
    // Worker to process the tasks provided into the tasksChan.
    func (wp *WorkerPool) Worker() {
        for t := range wp.tasksChan {
            t.Process()
            wp.wg.Done()
        }
    }
    ```

- `Run` function to start the workrs and process for the tasks.
    ```go
    // Run to start the workers and process the tasks.
    func (wp *WorkerPool) Run() {
        wp.wg.Add(len(wp.tasks))

        for i := 0; i < wp.Concurrency; i++ {
            go wp.Worker()
        }

        for _, task := range wp.tasks {
            wp.tasksChan <- task
        }

        close(wp.tasksChan)
        wp.wg.Wait()
    }
    ```

- `NewWorkerpool()` construct to create an instance of `WorkerPool`.
    ```go
    // NewWorkerPool construct to create a new worker pool.
    func NewWorkerPool(tasks []Task, concurrency int) *WorkerPool {
        return &WorkerPool{
            tasks:       tasks,
            Concurrency: concurrency,
            tasksChan:   make(chan Task, len(tasks)),
        }
    }
    ```

- `main` entrypoint defination code. See, how i am using the same workerpool to run **multiple indepentent tasks simultenously, like multiprocessing**.

    ```go
    func main() {
        N := 30
        tasks := make([]Task, N)

        // Fetch api data.
        for i := 0; i < N; i++ {
            if i%2 == 0 {
                tasks[i] = &TodoFetchTask{
                    ID:     i,
                    ApiURL: fmt.Sprintf("https://jsonplaceholder.typicode.com/todos/%d", i),
                }
            } else {
                tasks[i] = &EmailTask{
                    ID:         i,
                    Recipients: []string{"a@example.com", "b@example.com", "admin@example.com"},
                    Msg:        "# Hello {{User}},\nHope you are doing good. ",
                    From:       "no-reply.support@example.com",
                }
            }
        }

        workerpool := NewWorkerPool(tasks, 5)
        workerpool.Run()

    }
    ```

## Output

![workerpool-log](assets/personalBlogs/images/workerpool.gif)




### Real-World Applications:

- **Web Servers:** Worker pools can be used to handle incoming requests concurrently, improving server performance and responsiveness.
- **Data Processing Pipelines:** Worker pools can be used to process large datasets in parallel, accelerating data processing tasks.
- **Background Tasks:** Worker pools can be used to execute background tasks, such as sending emails, generating reports, or performing data analysis.

### Acknowledgements:

- Image borrowed from [Scaler/topics/golang/workerpool-in-golang](https://www.scaler.com/topics/golang/workerpool-in-golang/)

### Authors:

- [@github/sounishnath003](https://www.github.com/sounishnath003)
- [@lnkdn/SounishNath](https://www.linkedin.com/in/sounishnath003)