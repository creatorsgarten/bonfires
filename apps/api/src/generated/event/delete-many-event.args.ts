import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';

@ArgsType()
export class DeleteManyEventArgs {

    @Field(() => EventWhereInput, {nullable:true})
    where?: EventWhereInput;
}
