import { injectable, inject } from 'inversify';
import { Person } from '../../domain/entity/Person';
import { PersonRepository } from '../../domain/repository/PersonRepository';
import {
    PersonRemoteDataSource,
    PERSON_REMOTE_DATA_SOURCE
} from '../datasource/person/PersonRemoteDataSource';
import { PersonModel } from '../model/PersonModel';

@injectable()
export class PersonRepositoryImpl implements PersonRepository {
    private personRemoteDataSource: PersonRemoteDataSource;

    constructor(
        @inject(PERSON_REMOTE_DATA_SOURCE)
        personRemoteDataSource: PersonRemoteDataSource
    ) {
        this.personRemoteDataSource = personRemoteDataSource;
    }

    async getPersons(): Promise<Person[]> {
        const persons: PersonModel[] =
            await this.personRemoteDataSource.getPersons();
        return persons.map((person: PersonModel) =>
            Person.mapperToEntity(person)
        );
    }
}
