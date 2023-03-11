import { logDOM } from "@testing-library/react";
import React from "react";

export default function BFS(start, finish, grid) {
    const n = grid.length;
    const m = grid[0].length;
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    const isvalid = (r, c) => {
        return r >= 0 && r < n && c >= 0 && c < m && grid[r][c].isWall == false;
    };

    const inf = 100000000;
    const dis = [];
    const vis = [];
    const previous = [];
    const nodevisinorder = [];

    for (let i = 0; i < n; i++) {
        const a = [];
        const b = [];
        const c = [];
        for (let j = 0; j < m; j++) {
            a.push(inf);
            b.push(false);
            c.push([0, 0]);
        }
        dis.push(a);
        vis.push(b);
        previous.push(c);
    }

    const queue = [];
    queue.push(start);
    dis[start[0]][start[1]] = 0;
    vis[start[0]][start[1]] = true;
    nodevisinorder.push(start);
    previous[start[0]][start[1]] = [-1, -1];

    while (queue.length > 0) {
        const u = queue.shift();
        const r = u[0],
            c = u[1];

        for (let i = 0; i < directions.length; i++) {
            const nr = r + directions[i][0];
            const nc = c + directions[i][1];

            if (isvalid(nr, nc) && !vis[nr][nc]) {
                nodevisinorder.push([nr, nc]);
                queue.push([nr, nc]);
                vis[nr][nc] = true;
                dis[nr][nc] = dis[r][c] + 1;
                previous[nr][nc] = [r, c];

                if (nr == finish[0] && nc == finish[1]) {
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
                    return [nodevisinorder, nodesinpath];
                }
            }
        }
    }
    return [nodevisinorder, []];
}
