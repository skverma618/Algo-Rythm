import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function BFS() {
    const code = `
    // s is source node from where bfs will start
    // adj is adjacency list representation of bfs
    // Mark all the vertices as not visited
    vector<bool> visited;
    visited.resize(V,false);
    // Create a queue for BFS
    list<int> queue;
    // Mark the current node as visited and enqueue it
    visited[s] = true;
    queue.push_back(s);
    while(!queue.empty())
    {
        // Dequeue a vertex from queue and print it
        s = queue.front();
        cout << s << " ";
        queue.pop_front();
        // Get all adjacent vertices of the dequeued
        // vertex s. If a adjacent has not been visited,
        // then mark it visited and enqueue it
        for (auto adjecent: adj[s])
        {
            if (!visited[adjecent])
            {
                visited[adjecent] = true;
                queue.push_back(adjecent);
            }
        }
    }`;

    return (
        <SyntaxHighlighter
            language="cpp"
            customStyle={{
                margin: "0px",
                borderRadius: "0px",
                backgroundColor: "blanchedalmond",
            }}
        >
            {code}
        </SyntaxHighlighter>
    );
}
