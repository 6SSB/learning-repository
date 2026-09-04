class player:
    def __init__(self, name, health, attack):
        self.name = name
        self.health = health
        

    def attack (self, enemy):
        enemy.health -= 25
        if enemy.health < 0:
            enemy.health = 0

    def heal(self):
        self.health += 5
        if self.health > 100:
            self.health = 100

    def is_alive(self):
        if self.health > 0:
            return True
        else:
            return False

    def show_stats(self):
        print(f"{self.name} - Health: {self.health}, alive: {self.is_alive()}")

class enemy:
    def __init__(self, name, health, attack):
        self.name = name
        self.health = health
        

    def attack(self, player):
        player.health -= 25
        if player.health < 0:
            player.health = 0

    def heal(self):
        self.health += 5
        if self.health > 100:
            self.health = 100

    def is_alive(self):
        if self.health > 0:
            return True
        else:
            return False

    def show_stats(self):
        print(f"{self.name} - Health: {self.health}, alive: {self.is_alive()}")

sabith = player("6SSB", 100, 25)
sabith.show_stats()

chatgpt = enemy("ChatGPT", 100, 25)
chatgpt.show_stats()

sabith.attack(chatgpt)
chatgpt.show_stats()

