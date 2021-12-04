import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventCreateInput } from './event-create.input';

@ArgsType()
export class CreateOneEventArgs {

    @Field(() => EventCreateInput, {nullable:false})
    data!: EventCreateInput;
}
