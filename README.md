# https://github.com/Mo2888/memory-game

# Starting the Game: When users click the "Start" button, they are prompted to enter their name. If they don't provide a name, "Unknown" is displayed.

Block Shuffling: The code dynamically generates a grid of memory blocks and shuffles them using CSS flex order to ensure a unique game layout every time.

Block Interaction: Users can click on blocks to flip them over, revealing icons. The game allows players to flip two blocks at a time.

Matching Pairs: The application checks if the two flipped blocks match based on their dataset icons. If they match, the blocks stay flipped. If not, they flip back after a brief delay, and the number of tries increases.

Tries Count: The number of tries is displayed, encouraging players to complete the game with the fewest attempts possible.

No-Clicking Period: To prevent users from clicking too quickly, a "no-clicking" period is implemented after two blocks are flipped. This enhances the challenge and strategy of the game.

Block Shuffling Function: A custom shuffle function is included to ensure that the block order is randomized.
