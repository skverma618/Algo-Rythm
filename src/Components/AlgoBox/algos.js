import React from 'react'

const algos = () => {
  return (
    <React.Fragment>
        {/* BFS JAVA */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}
        {/* BFS CPP */}
        {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}
        
        {/* DFS JAVA */}
        {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}

        {/* DFS CPP */}
        {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}

        {/* DIJKSTRA JAVA */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}

        {/* DIJKSTRA CPP */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* BUBBLE JAVA */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* BUBBLE CPP */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* MERGE JAVA */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* MERGE CPP */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* INSERTION JAVA */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* INSERTION CPP */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* QUICK JAVA */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* QUICK JAVA */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* SELECTION JAVA */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* SELECTION CPP */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* SUDOKU JAVA */}
            {  `boolean solveSudoku(char[][] board){ `}<br />&nbsp;{`
        for(int i=0;i<board.length;i++) `}<br />&nbsp;&nbsp;{`
            for(int j=0;j<board.length;j++){`}<br />&nbsp;&nbsp;&nbsp;{`
                if(board[i][j]=='.'){`}<br />&nbsp;&nbsp;&nbsp;{`
                    for(char c='1';c<='9';c++){`}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if(isValid(board,i,j,c)){`}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            board[i][j]=c;`}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            if(solveSudoku(board))`}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                                return true;`}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            else`}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                                board[i][j]='.';`}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                        }`}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                    }`}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                    return false;`}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                }`}<br />&nbsp;&nbsp;&nbsp;{`
            }`}<br />&nbsp;&nbsp;{`
        return true;`}<br />&nbsp;{`
    }`}<br />&nbsp;{`
    `}<br />&nbsp;&nbsp;{`
    boolean isValid(char[][] board, int row, int col, char c){`}<br />&nbsp;{`
        for(int i=0;i<board.length;i++){`}<br />&nbsp;&nbsp;{`
            if(board[i][col]==c)`}<br />&nbsp;&nbsp;&nbsp;{`
                return false;`}<br />&nbsp;&nbsp;{`
            if(board[row][i]==c)`}<br />&nbsp;&nbsp;&nbsp;{`
                return false;`}<br />&nbsp;&nbsp;{`
            if(board[3*(row/3)+i/3][3*(col/3)+i%3]==c)`}<br />&nbsp;&nbsp;&nbsp;{`
                return false;`}<br />&nbsp;&nbsp;{`
        }`}<br />&nbsp;&nbsp;{`
        return true;`}<br />&nbsp;{`
    }  `}


        {/* SUDOKU CPP */}
            {  `bool solveSudoku(vector<vector<char>>& board){
        for(int i=0;i<board.size();++i){
            for(int j=0;j<board[0].size();++j){
                if(board[i][j]=='.'){
                    for(int c=1;c<=9;++c){  
                        if(check(i,j,board,c+48)){
                            board[i][j]=c+48;
                            if(solveSudoku(board))
                            return true;
                            board[i][j]='.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    
    bool check(int row,int col,vector<vector<char>>&board,char c){
        for(int i=0;i<9;++i){
            if(board[i][col]==c)
                return false;
            if(board[row][i]==c)
                return false;
            if(board[3*(row/3)+(i/3)][3*(col/3)+(i&33)]==c)
                return false;
        }
        return true;
    }   `}


        {/* NQUEEN JAVA */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* NQUEEN CPP */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}


        {/* BFS JAVA */}
            {  `void BFS(int n){  `}<br />&nbsp;{`
                boolean nodes[] = new boolean[node];   `}<br />&nbsp;{`     
                int a = 0;  `}<br />&nbsp;{`
                nodes[n]=true;    `}<br />&nbsp;{`                
                que.add(n);      `}<br />&nbsp;{`
                while (que.size() != 0){  `}<br />&nbsp;&nbsp;{`
                    `}<br />&nbsp;&nbsp;{`
                    n = que.poll();        `}<br />&nbsp;&nbsp;{`
                    System.out.print(n+" ");   `}<br />&nbsp;&nbsp;{` 
                    for (int i = 0; i < adj[n].size(); i++){  `}<br />&nbsp;&nbsp;&nbsp;{`
                        a = adj[n].get(i);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        `}<br />&nbsp;&nbsp;&nbsp;&nbsp;{`
                        if (!nodes[a]){      `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            nodes[a] = true;  `}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`
                            que.add(a);  `}<br />&nbsp;&nbsp;&nbsp;{`
                        }  `}<br />&nbsp;&nbsp;{`
                    }    `}<br />&nbsp;{`
                }  `}<br />{`
            }  `}                                                                        

    </React.Fragment>
  )
}

export default algos