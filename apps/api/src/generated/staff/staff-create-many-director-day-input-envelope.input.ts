import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateManyDirectorDayInput } from './staff-create-many-director-day.input';

@InputType()
export class StaffCreateManyDirectorDayInputEnvelope {

    @Field(() => [StaffCreateManyDirectorDayInput], {nullable:false})
    data!: Array<StaffCreateManyDirectorDayInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
