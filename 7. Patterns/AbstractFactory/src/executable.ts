enum RoleEnum {
    ADMIN = 'admin',
    USER = 'user'
};

/**
 * 1-й компонент (опциональный) - абстрактный продукт.
 */
/**
 * 2-й компонент - конкретный продукт
 */
class User {
    name: string;
    role: RoleEnum;

    constructor(name: string) {
        this.name = name;
    }
}

class Admin extends User {
    role = RoleEnum.ADMIN;
};

class RegularUser extends User {
    role = RoleEnum.USER;
};
/**
 * 3-й компонент (опциональный) - абстрактная фабрика
 */
/**
 * 4-й компонент - конкретная фабрика
 */
class UserFactory {
    createUser(name: string, role: RoleEnum) {
        switch (role) {
            case RoleEnum.USER:
                return new RegularUser(name);
            case RoleEnum.ADMIN:
                return new Admin(name);
        }
    }
}

const userFactory = new UserFactory();
const volodya = userFactory.createUser('Володя', RoleEnum.USER);
console.log(volodya);

