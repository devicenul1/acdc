/// <reference types="react-scripts" />
declare namespace NodeJS {

    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        REACT_APP_OPEN_BREWERY_DB_BASE_URL: string
    }
}
