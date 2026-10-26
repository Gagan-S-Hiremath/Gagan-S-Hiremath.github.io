# LinkedIn Prospect Research & Personalised Outreach Agent — access

Status: working local Python/Streamlit prototype. No public application deployment is verified. The portfolio screenshot shows the actual application with an empty preview database.

User-supplied prospect context → account research → evidence review → personalised draft → quality checks → human approval. No LinkedIn login, scraping or message sending is implemented.

## Local startup

Use the existing prototype source and its pinned `requirements.txt`. Configure `OPENAI_API_KEY` and `OPENAI_MODEL` in that project's local environment, then run:

```powershell
python -m streamlit run app.py --server.address 127.0.0.1 --server.port 8501 --browser.gatherUsageStats false
```

The existing Windows launcher is also supported. Provider model access and hosted web-search compatibility require validation separately from the interface screenshot.

## Hosting configuration

The portfolio also includes `prototype.Dockerfile`. Place it in the existing prototype source root and build with `docker build -f prototype.Dockerfile -t outreach-prototype .`. The explicit file copies exclude credentials and runtime records. This container configuration is prepared but has not been built or deployed in this environment. Attach persistent storage at `/app/runtime` for a single-instance host; supply credentials through the host secret store.

GitHub Pages cannot execute Python. A managed Python/container host is required. Use the existing approved source, not a replacement mockup.

```text
Build: python -m pip install -r requirements.txt
Start: python -m streamlit run app.py --server.address 0.0.0.0 --server.port $PORT --server.headless true --browser.gatherUsageStats false
```

Configure these in the host environment:

| Variable | Purpose |
| --- | --- |
| OPENAI_API_KEY | Scoped credential, entered in the host's secret store |
| OPENAI_MODEL | Account-accessible Responses API model compatible with the required hosted search tool |
| YOYO_DB_PATH | Writable persistent SQLite location for the single-instance prototype |
| YOYO_LOG_PATH | Writable logs with access and retention controls |
| YOYO_TEST_MODE | Enable only for explicitly synthetic preview fixtures |
| LANGSMITH_TRACING / LANGCHAIN_TRACING_V2 | Keep disabled; tracing is not an implemented integration |

Before sharing, configure authenticated restricted access, provider spending limits, approved data handling and persistence. Verify review recovery, concurrency and model/tool access. Never upload a credential-bearing `.env`, real prospect exports, existing database or logs. Multi-tenant public SaaS requires additional isolation beyond the local prototype.

Remaining manual step: provision an authorised Python hosting account and secret store, deploy the approved source using the above build/start settings and validate its live workflow. No such account or public URL has been assumed. Add “View Working Prototype” after access is verified; until then, use the genuine prototype evidence.
