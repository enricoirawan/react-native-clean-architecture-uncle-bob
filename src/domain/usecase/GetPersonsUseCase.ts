import { inject, injectable } from 'inversify';
import { NoParams, UseCase } from '../../core/UseCase';
import { Person } from '../entity/Person';
import {
    PersonRepository,
    PERSON_REPOSITORY
} from '../repository/PersonRepository';

export const GET_PERSONS_USE_CASE = 'GET_PERSONS_USE_CASE';

@injectable()
export class GetPersonsUseCase implements UseCase<Person[], NoParams> {
    private personRepository: PersonRepository;

    constructor(@inject(PERSON_REPOSITORY) personRepository: PersonRepository) {
        this.personRepository = personRepository;
    }

    execute(): Promise<Person[]> {
        return this.personRepository.getPersons();
    }
}
