FROM python:3.13-slim

LABEL maintainer="Jai Bardiya"
LABEL project="Jai Enterprise Platform"
LABEL version="1.0.0"

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

ENV APP_ENV=development

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
