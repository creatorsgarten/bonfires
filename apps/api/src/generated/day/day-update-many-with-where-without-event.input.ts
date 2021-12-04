import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayScalarWhereInput } from './day-scalar-where.input';
import { DayUpdateManyMutationInput } from './day-update-many-mutation.input';

@InputType()
export class DayUpdateManyWithWhereWithoutEventInput {

    @Field(() => DayScalarWhereInput, {nullable:false})
    where!: DayScalarWhereInput;

    @Field(() => DayUpdateManyMutationInput, {nullable:false})
    data!: DayUpdateManyMutationInput;
}
