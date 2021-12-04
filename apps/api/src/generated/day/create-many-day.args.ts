import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DayCreateManyInput } from './day-create-many.input';

@ArgsType()
export class CreateManyDayArgs {

    @Field(() => [DayCreateManyInput], {nullable:false})
    data!: Array<DayCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
