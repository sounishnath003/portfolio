
VERSION=$(shell date "+%Y%m%d")
IMAGE_NAME=asia-south1-docker.pkg.dev/sounish-cloud-workstation/sounishnath-portfolio/portfilio-frontend

build-container:
	docker images $(IMAGE_NAME)
	docker build -t $(IMAGE_NAME):$(VERSION) -f Dockerfile .

run-container:
	docker run -ti -p 4200:80 $(IMAGE_NAME):$(VERSION)

push-container: build-container
	gcloud auth configure-docker asia-south1-docker.pkg.dev
	docker push $(IMAGE_NAME):$(VERSION)