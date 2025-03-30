export class CommonSingleton {
    private static instance: CommonSingleton | null;
    private constructor() { }

    static getInstance() {
        if (!this.instance) this.instance = new CommonSingleton();

        return this.instance;
    }
};

const singlInstance = CommonSingleton.getInstance()

// =====================================================
export class ApplicationConfiguration {
    private static credential: { token?: string, api_key?: string } = {};

    private constructor() { }

    static setCredential(_token?: string, _api_key?: string
    ) {
        ApplicationConfiguration.credential.api_key = _api_key;
        ApplicationConfiguration.credential.token = _token;
    };

    static getCredential() {
        return ApplicationConfiguration.credential;
    };
};

ApplicationConfiguration.setCredential('example_token')
const token = ApplicationConfiguration.getCredential();

// =====================================================
export class ApplicationLogger {
    private static logs: Array<string> = []

    private constructor() { }

    static setLogs(log: string) {
        const dateTimeLog = `${new Date()} - ${log}`
        this.logs.push(dateTimeLog)
    }

    static getLogs() {
        return this.logs;
    }
}

ApplicationLogger.setLogs('Запуск приложения')
ApplicationLogger.setLogs('Завершение приложения')
console.log(ApplicationLogger.getLogs())