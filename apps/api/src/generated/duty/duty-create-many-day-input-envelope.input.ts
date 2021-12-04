import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyCreateManyDayInput } from './duty-create-many-day.input';

@InputType()
export class DutyCreateManyDayInputEnvelope {

    @Field(() => [DutyCreateManyDayInput], {nullable:false})
    data!: Array<DutyCreateManyDayInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
