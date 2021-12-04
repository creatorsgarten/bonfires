import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventScalarWhereInput } from './event-scalar-where.input';
import { EventUpdateManyMutationInput } from './event-update-many-mutation.input';

@InputType()
export class EventUpdateManyWithWhereWithoutWorkspaceInput {

    @Field(() => EventScalarWhereInput, {nullable:false})
    where!: EventScalarWhereInput;

    @Field(() => EventUpdateManyMutationInput, {nullable:false})
    data!: EventUpdateManyMutationInput;
}
