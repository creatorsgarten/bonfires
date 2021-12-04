import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayCreateManyEventInput } from './day-create-many-event.input';

@InputType()
export class DayCreateManyEventInputEnvelope {

    @Field(() => [DayCreateManyEventInput], {nullable:false})
    data!: Array<DayCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
