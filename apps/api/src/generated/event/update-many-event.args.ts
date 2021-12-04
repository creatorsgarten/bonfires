import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventUpdateManyMutationInput } from './event-update-many-mutation.input';
import { EventWhereInput } from './event-where.input';

@ArgsType()
export class UpdateManyEventArgs {

    @Field(() => EventUpdateManyMutationInput, {nullable:false})
    data!: EventUpdateManyMutationInput;

    @Field(() => EventWhereInput, {nullable:true})
    where?: EventWhereInput;
}
