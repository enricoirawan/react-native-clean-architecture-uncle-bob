export interface UseCase<T , P>{
    execute(params : P) : Promise<T>
}

export class NoParams{
    constructor() {}
}

