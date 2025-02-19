namespace Factory {
    /**
     * 1-й компонент паттерна "Фабрика" (опциональный) - абстрактный продукт
     */
    abstract class Vehicle {
        abstract name: string;
        abstract speed: number;
        abstract run(): void;
    }

    /**
     * 2-й компонент паттерна "Фабрика" - конкретный продукт
     */
    class Lada extends Vehicle {
        name: string = 'Lada'
        speed: number = 100;
        run(): void {
            console.log(`Run ${this.name} with speed ${this.speed}`)
        }
    }

    class BMW extends Vehicle {
        name: string = 'BMW'
        speed: number = 160;
        run(): void {
            console.log(`Run ${this.name} with speed ${this.speed}`)
        }
    }

    /**
     * 3-й компонент паттерна "Фабрика" (опциональный) - абстрактное производство
     */
    abstract class CarFactory {
        abstract buildCar(): Vehicle
    }

    /**
     * 4-й компонент паттерна "Фабрика" - конкретное производство
     */
    class LadaFactory extends CarFactory {
        buildCar(): Vehicle {
            return new Lada();
        };
    };

    class BMWFactory extends CarFactory {
        buildCar(): Vehicle {
            return new BMW();
        }
    }

    const ladaFactory = new LadaFactory();
    const ladaGranta = ladaFactory.buildCar();
    // ===================================================
    abstract class User {
        abstract role: string;
        abstract login(): void;
    }

    class Admin extends User {
        role = 'Admin';
        login() {
            console.log("Admin logged in.");
        }
    }

    class Moderator extends User {
        role = 'Moderator';
        login() {
            console.log("Moderator logged in.");
        }
    }

    class UserFactory {
        static createUser(role: string): User {
            switch (role) {
                case 'admin':
                    return new Admin();
                case 'moderator':
                    return new Moderator();
                default:
                    throw new Error("Unknown role");
            }
        }
    }

    const admin = UserFactory.createUser('admin');
    admin.login();
}
