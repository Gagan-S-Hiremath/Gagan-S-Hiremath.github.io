# Build against the existing approved prototype source root, not the portfolio.
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY app.py ./
COPY src/ ./src/
COPY prompts/ ./prompts/
# Explicit COPY excludes .env, existing databases, logs and prospect exports.
RUN useradd --uid 10001 --create-home appuser && mkdir -p /app/runtime && chown -R appuser:appuser /app
USER appuser
ENV YOYO_DB_PATH=/app/runtime/prototype.sqlite3 YOYO_LOG_PATH=/app/runtime/prototype.log LANGSMITH_TRACING=false LANGCHAIN_TRACING_V2=false
EXPOSE 8501
CMD ["sh", "-c", "python -m streamlit run app.py --server.address 0.0.0.0 --server.port ${PORT:-8501} --server.headless true --browser.gatherUsageStats false"]
