  class Friend {
    let name : String
    let age : Int
    
    init(name : String, age: Int) {
        self.name = name
        self.age = age
    }
}
func printFriends(friends: [Friend])
{
    for friendEntry in friends {
        print("Name: \(friendEntry.name), age: \(friendEntry.age)")
    }
}

var friends:[Friend] = []
let friend1 = Friend(name: "Sergey", age: 30)
let friend2 = Friend(name: "Bill", age: 35)
let friend3 = Friend(name: "Michael", age: 21)
friends.append(friend1)
friends.append(friend2)
friends.append(friend3)
printFriends(friends: friends)
// Get sorted array in descending order (largest to the smallest number)
let sortedFriends = friends.sorted(by: { $0.age > $1.age })
printFriends(friends: sortedFriends)
// Get sorted array in ascending order (smallest to the largest number)
let sortedFriendsAscendingOrder = friends.sorted(by: { $0.age < $1.age })
printFriends(friends: sortedFriendsAscendingOrder)