# Search Algorithms

## Breadth First search Algorithm:
 
It’s the kind of an algorithm which searches through graph or tree data structure, it starts on the root node(search key), explores the all adjacent/neighbour nodes at the immediate depth level. Before moving on to the nodes on the next depth, it first stores all the visited nodes/vertices in a queue(FIFO).
### Time and space complexity
```
The time complexity can be expressed as O(|V|+|E|), since every vertex and every edge will be explored in the worst case. |V| is the number of vertices and |E| is the number of edges in the graph. Note that O(|E|) may vary between O(1) and O(|V|^{2}), depending on how sparse the input graph is.
The space complexity can be expressed as O(|V|), where |V| is the set of vertices
```
[Useful Video about BFS and DFS](https://www.youtube.com/watch?v=pcKY4hjDrxk) 


## Depth First search Algorithm:
Is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. It uses a stack(LIFO).

`Time complexity is O(V + E)`

*The above two traverse an unweighted graph. It is a graph in which the distance between two nodes is the same.*

## A * search Algorithm:
A* is an *informed* search algorithm, or a best-first search, meaning that it is formulated in terms of weighted graphs: starting from a specific starting node of a graph, it aims to find a path to the given goal node having the smallest cost (least distance travelled, shortest time, etc.).
It does this by maintaining a tree of paths originating at the start node and extending those paths one edge at a time until its termination criterion is satisfied.

NB: A*  traverses through a weighted graph guided by a holistic and at each iteration of its main loop, A* needs to determine which of its paths to extend. It does so based on the cost of the path and an estimate of the cost required to extend the path all the way to the goal. 
-> A weighted graph is the one in which the distance between any two nodes is different.


### Not so relevant but its good to know about Trees and Graphs

NB: A tree has only one path between any two nodes/vertices while a graph can have loops, circuits, there can be more than one path i.e graph can have unidirectional or bi-directional paths between nodes.


Tree                                                   	
- Hierarchical model                                 	 
- Only one edge btn two nodes                	        
- Has a root node  
                                  	 
Graph
- Network model
- Many edges on two nodes
- No such thing as root node.

`Types of Trees:`
-> Binary search tree:
-> Binary tree:
-> AVL tree:
-> Heaps:

