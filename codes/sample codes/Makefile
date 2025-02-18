CXX:=g++
CXXFLAGS:=-Wall -std=c++17
srcs=$(shell find ./src -type f -name "*.cpp" -exec basename {} \;)
objs:=$(srcs:.cpp=.o)
srcs2=$(shell find ./main -type f -name "*.cpp" -exec basename {} \;)
mains=$(srcs2:.cpp=)
all: $(objs) $(mains)

%.o:./src/*/%.cpp ./src/*/%.h
	$(CXX) $(CXXFLAGS) $< -c -o $@

$(mains):%:./main/%.cpp $(objs)
	$(CXX) $(CXXFLAGS) $< $(objs) -o $@

clean: 
	rm -f $(objs) $(mains)

.PHONY:all clean