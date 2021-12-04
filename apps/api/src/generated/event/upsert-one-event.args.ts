import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventCreateInput } from './event-create.input';
import { EventUpdateInput } from './event-update.input';

@ArgsType()
export class UpsertOneEventArgs {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventCreateInput, {nullable:false})
    create!: EventCreateInput;

    @Field(() => EventUpdateInput, {nullable:false})
    update!: EventUpdateInput;
}
