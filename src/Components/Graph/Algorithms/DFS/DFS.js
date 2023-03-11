import React from "react";

export default function DFS(grid, start, finish) {
    let foundfinish = false;
    const n = grid.length;
    const m = grid[0].length;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    const isvalid = (r, c) => {
        return r >= 0 && r < n && c >= 0 && c < m && grid[r][c].isWall == false;
    };

    const vis = [];
    const previous = [];
    const nodevisinorder = [];

    for (let i = 0; i < n; i++) {
        const b = [];
        const c = [];
        for (let j = 0; j < m; j++) {
            b.push(false);
            c.push([0, 0]);
        }
        vis.push(b);
        previous.push(c);
    }

    vis[start[0]][start[1]] = true;
    previous[start[0]][start[1]] = [-1, -1];

    const dfsrecursive = (r, c, vis, nodevisinorder) => {
        if (!foundfinish) {
            nodevisinorder.push([r, c]);
        }

        for (let i = 0; i < directions.length; i++) {
            const nr = r + directions[i][0];
            const nc = c + directions[i][1];

            if (isvalid(nr, nc) && !vis[nr][nc]) {
                vis[nr][nc] = true;
                previous[nr][nc] = [r, c];

                if (nr == finish[0] && nc == finish[1]) {
                    console.log("found");
                    nodevisinorder.push([nr, nc]);
                    foundfinish = true;
                }
                if (nr != finish[0] || nc != finish[1]) {
                    dfsrecursive(nr, nc, vis, nodevisinorder);
                }
            }
        }

        if (!foundfinish) {
            nodevisinorder.push([r, c]);
        }
    };

    dfsrecursive(start[0], start[1], vis, nodevisinorder);

    const curnode = [...finish];
    const nodesinpath = [];
    while (curnode[0] != start[0] || curnode[1] != start[1]) {
        nodesinpath.push([curnode[0], curnode[1]]);
        const t = [curnode[0], curnode[1]];
        curnode[0] = previous[t[0]][t[1]][0];
        curnode[1] = previous[t[0]][t[1]][1];
    }
    nodesinpath.push([start[0], start[1]]);
    nodesinpath.reverse();

    if (foundfinish) {
        return [nodevisinorder, nodesinpath];
    } else {
        return [nodevisinorder, []];
    }
}
