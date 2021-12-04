import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutDirectorDayInput } from './staff-create-without-director-day.input';
import { StaffCreateOrConnectWithoutDirectorDayInput } from './staff-create-or-connect-without-director-day.input';
import { StaffCreateManyDirectorDayInputEnvelope } from './staff-create-many-director-day-input-envelope.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@InputType()
export class StaffCreateNestedManyWithoutDirectorDayInput {

    @Field(() => [StaffCreateWithoutDirectorDayInput], {nullable:true})
    create?: Array<StaffCreateWithoutDirectorDayInput>;

    @Field(() => [StaffCreateOrConnectWithoutDirectorDayInput], {nullable:true})
    connectOrCreate?: Array<StaffCreateOrConnectWithoutDirectorDayInput>;

    @Field(() => StaffCreateManyDirectorDayInputEnvelope, {nullable:true})
    createMany?: StaffCreateManyDirectorDayInputEnvelope;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    connect?: Array<StaffWhereUniqueInput>;
}
