class cell {
    constructor(x, y, distance) {
        this.x = x;
        this.y = y;
        this.distance = distance;
    }
}

export default function dijsktra(grid, start, finish) {
    function isInsideGrid(i, j, ROW, COL) {
        return (
            i >= 0 && i < ROW && j >= 0 && j < COL && grid[i][j].isWall == false
        );
    }
    let foundfinishnode = false;

    let row = grid.length;
    let col = grid[0].length;

    console.log(row, col);

    const nodevisinorder = [];
    const dis = [];
    for (let i = 0; i < row; i++) {
        const a = [];
        for (let j = 0; j < col; j++) {
            a.push(1000000);
        }
        dis.push(a);
    }

    var dx = [-1, 1, 0, 0];
    var dy = [0, 0, -1, 1];

    let st = [];

    st.push(new cell(start[0], start[1], 0));
    dis[start[0]][start[1]] = 0;

    let parents = [];
    for (let i = 0; i < row; i++) {
        const a = [];
        for (let j = 0; j < col; j++) {
            a.push([-1, -1]);
        }
        parents.push(a);
    }

    while (st.length != 0) {
        let k = st[0];
        st.shift();

        nodevisinorder.push([k.x, k.y]);
        if (k.x === finish[0] && k.y === finish[1]) {
            foundfinishnode = true;
            break;
        }

        for (let i = 0; i < 4; i++) {
            let x = k.x + dx[i];
            let y = k.y + dy[i];

            if (!isInsideGrid(x, y, grid.length, grid[0].length)) continue;

            if (dis[x][y] > dis[k.x][k.y] + grid[x][y].weight) {
                dis[x][y] = dis[k.x][k.y] + grid[x][y].weight;
                st.push(new cell(x, y, dis[x][y]));
                parents[x][y] = [k.x, k.y];
                // console.log(parents[x][y]);
            }
        }

        st.sort((a, b) => {
            if (a.distance == b.distance) {
                if (a.x != b.x) return a.x - b.x;
                else return a.y - b.y;
            }
            return a.distance - b.distance;
        });
    }

    for (let i = 0; i < row; i++) {
        const a = [];
        for (let j = 0; j < col; j++) {
            console.log(dis[i][j]);
        }
    }

    if (foundfinishnode) {
        let nodesinpath = [];
        let currentVertex = [...finish];
        while (!(currentVertex[0] == -1 && currentVertex[1] == -1)) {
            nodesinpath.push(currentVertex);
            currentVertex = [...parents[currentVertex[0]][currentVertex[1]]];
        }
        nodesinpath.push(start);
        nodesinpath.reverse();
        return [nodevisinorder, nodesinpath];
    } else {
        return [nodevisinorder, []];
    }
}
