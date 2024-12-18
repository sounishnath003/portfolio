
VERSION=$(shell date "+%Y%m%d%H%S")
IMAGE_NAME=asia-south1-docker.pkg.dev/sounish-cloud-workstation/sounishnath-portfolio/portfilio-frontend

build-container:
	docker images $(IMAGE_NAME)
	docker build --platform=linux/amd64 -t $(IMAGE_NAME):$(VERSION) -f Dockerfile .

run-container:
	docker run -ti -p 4200:80 $(IMAGE_NAME):$(VERSION)

push-container: build-container
	docker push $(IMAGE_NAME):$(VERSION)

firewall-rule:
	gcloud compute firewall-rules create portfolio-frontend-node-port --allow tcp:30007
	gcloud compute firewall-rules delete portfolio-frontend-node-port
