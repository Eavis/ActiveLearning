public GameEntry remove(int i) throws IndexOutOfBoundsException {
	if (i < 0 || i >= numEntries)
		thorw new IndexOutOfBoundsException("Invalid index :" + i);
	GameEntry temp = board[i];
	for (int j = i; j < numEntries - 1; j++) {
		board[j] = board[j+1];
	}
	board[numEntries - 1] = null;
	numEntries--;
	return temp;
}