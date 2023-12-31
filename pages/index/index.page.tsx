import { useEffect, useState } from "preact/hooks";
import preactLogo from "../assets/preact.svg";
import "./style.css";
import { IBbsArticle } from "@pdr-999/sdk/lib/structures/bbs/IBbsArticle";
import api from "@pdr-999/sdk";
export function Page() {
  const [articles, setArticles] = useState<IBbsArticle.ISummary[]>([]);
  useEffect(() => {
    api.functional.bbs.articles
      .index({ host: "http://localhost:3002", simulate: true }, "general", {})
      .then(({ data }) => setArticles(data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <a href="https://preactjs.com" target="_blank">
        <img src={preactLogo} alt="Preact logo" height="160" width="160" />
      </a>
      <h1>Get Started building Vite-powered Preact Apps </h1>
      <pre>{JSON.stringify(articles, null, 1)}</pre>
      <section>
        <Resource
          title="Learn Preact"
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          href="https://preactjs.com/tutorial"
        />
        <Resource
          title="Differences to React"
          description="If you're coming from React, you may want to check out our docs to see where Preact differs"
          href="https://preactjs.com/guide/v10/differences-to-react"
        />
        <Resource
          title="Learn Vite"
          description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
          href="https://vitejs.dev"
        />
      </section>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
