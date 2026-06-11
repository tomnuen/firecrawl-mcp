import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import { z } from "zod";
// import Firecrawl from "@mendable/firecrawl-js";

export class MyMCP extends McpAgent {
	server = new McpServer({ name: "firecrawl", version: "1.0.0" });

	async init() {
		// const firecrawl = new Firecrawl();	    
		
		// this.server.tool(
	 //      "scrape",
	 //      { url: z.string().url() },
	 //      async ({ url }) => {
	 //        const doc = await firecrawl.scrape(url, { formats: ["markdown"] });
	 //        return { content: [{ type: "text", text: doc.markdown ?? "" }] };
	 //      }
	 //    );
	}
}

export default {
	fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const url = new URL(request.url);

		if (url.pathname === "/mcp") {
			return MyMCP.serve("/mcp").fetch(request, env, ctx);
		}

		return new Response("Not found", { status: 404 });
	},
};
