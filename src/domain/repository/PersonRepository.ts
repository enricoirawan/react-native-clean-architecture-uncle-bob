import { Person } from '../entity/Person';

export interface PersonRepository {
    getPersons(): Promise<Person[]>;
}

export const PERSON_REPOSITORY = 'PERSON_REPOSITORY';
