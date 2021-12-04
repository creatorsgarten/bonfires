import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventCreateManyInput } from './event-create-many.input';

@ArgsType()
export class CreateManyEventArgs {

    @Field(() => [EventCreateManyInput], {nullable:false})
    data!: Array<EventCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
