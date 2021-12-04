import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventUpdateInput } from './event-update.input';
import { EventWhereUniqueInput } from './event-where-unique.input';

@ArgsType()
export class UpdateOneEventArgs {

    @Field(() => EventUpdateInput, {nullable:false})
    data!: EventUpdateInput;

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;
}
