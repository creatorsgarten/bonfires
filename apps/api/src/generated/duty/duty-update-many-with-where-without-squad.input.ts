import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyScalarWhereInput } from './duty-scalar-where.input';
import { DutyUpdateManyMutationInput } from './duty-update-many-mutation.input';

@InputType()
export class DutyUpdateManyWithWhereWithoutSquadInput {

    @Field(() => DutyScalarWhereInput, {nullable:false})
    where!: DutyScalarWhereInput;

    @Field(() => DutyUpdateManyMutationInput, {nullable:false})
    data!: DutyUpdateManyMutationInput;
}
