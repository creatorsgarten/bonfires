import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';

@ArgsType()
export class FindUniqueEventArgs {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;
}
