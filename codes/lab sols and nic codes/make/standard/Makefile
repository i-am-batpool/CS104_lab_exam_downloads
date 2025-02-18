CXX=g++
CXXFLAGS=-std=c++11
all: powerful restorecmd

haha.o: player.h haha.cpp
	$(CXX) $(CXXFLAGS) -c haha.cpp -o $@

hehe.o: card.h hehe.cpp
	$(CXX) $(CXXFLAGS) -c hehe.cpp -o $@

nohehe.o: deck.h nohehe.cpp
	$(CXX) $(CXXFLAGS) -c nohehe.cpp -o $@

powerful: card.h powerful.cpp hehe.o
	$(CXX) $(CXXFLAGS) powerful.cpp hehe.o -o $@

restorecmd: deck.h player.h restore.cpp nohehe.o haha.o hehe.o
	$(CXX) $(CXXFLAGS) restore.cpp haha.o nohehe.o hehe.o -o restore

restore: 
	rm haha.o hehe.o nohehe.o powerful restore

.PHONY: all restore