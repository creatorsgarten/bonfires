import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutDirectorDayInput } from './staff-create-without-director-day.input';
import { StaffCreateOrConnectWithoutDirectorDayInput } from './staff-create-or-connect-without-director-day.input';
import { StaffUpsertWithWhereUniqueWithoutDirectorDayInput } from './staff-upsert-with-where-unique-without-director-day.input';
import { StaffCreateManyDirectorDayInputEnvelope } from './staff-create-many-director-day-input-envelope.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithWhereUniqueWithoutDirectorDayInput } from './staff-update-with-where-unique-without-director-day.input';
import { StaffUpdateManyWithWhereWithoutDirectorDayInput } from './staff-update-many-with-where-without-director-day.input';
import { StaffScalarWhereInput } from './staff-scalar-where.input';

@InputType()
export class StaffUncheckedUpdateManyWithoutDirectorDayInput {

    @Field(() => [StaffCreateWithoutDirectorDayInput], {nullable:true})
    create?: Array<StaffCreateWithoutDirectorDayInput>;

    @Field(() => [StaffCreateOrConnectWithoutDirectorDayInput], {nullable:true})
    connectOrCreate?: Array<StaffCreateOrConnectWithoutDirectorDayInput>;

    @Field(() => [StaffUpsertWithWhereUniqueWithoutDirectorDayInput], {nullable:true})
    upsert?: Array<StaffUpsertWithWhereUniqueWithoutDirectorDayInput>;

    @Field(() => StaffCreateManyDirectorDayInputEnvelope, {nullable:true})
    createMany?: StaffCreateManyDirectorDayInputEnvelope;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    set?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    disconnect?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    delete?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    connect?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffUpdateWithWhereUniqueWithoutDirectorDayInput], {nullable:true})
    update?: Array<StaffUpdateWithWhereUniqueWithoutDirectorDayInput>;

    @Field(() => [StaffUpdateManyWithWhereWithoutDirectorDayInput], {nullable:true})
    updateMany?: Array<StaffUpdateManyWithWhereWithoutDirectorDayInput>;

    @Field(() => [StaffScalarWhereInput], {nullable:true})
    deleteMany?: Array<StaffScalarWhereInput>;
}
