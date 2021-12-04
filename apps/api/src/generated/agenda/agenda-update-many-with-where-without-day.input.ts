import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgendaScalarWhereInput } from './agenda-scalar-where.input';
import { AgendaUpdateManyMutationInput } from './agenda-update-many-mutation.input';

@InputType()
export class AgendaUpdateManyWithWhereWithoutDayInput {

    @Field(() => AgendaScalarWhereInput, {nullable:false})
    where!: AgendaScalarWhereInput;

    @Field(() => AgendaUpdateManyMutationInput, {nullable:false})
    data!: AgendaUpdateManyMutationInput;
}
