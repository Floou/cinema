FROM python:3.8

RUN apt-get update && \
    apt-get install -y libpq-dev python3-dev

RUN pip3 install --upgrade pip


COPY ./ ./
RUN pip3 install -r requirements.txt
RUN pip3 install gunicorn
