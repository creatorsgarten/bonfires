import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutUserInput } from './staff-create-without-user.input';
import { StaffCreateOrConnectWithoutUserInput } from './staff-create-or-connect-without-user.input';
import { StaffCreateManyUserInputEnvelope } from './staff-create-many-user-input-envelope.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@InputType()
export class StaffCreateNestedManyWithoutUserInput {

    @Field(() => [StaffCreateWithoutUserInput], {nullable:true})
    create?: Array<StaffCreateWithoutUserInput>;

    @Field(() => [StaffCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<StaffCreateOrConnectWithoutUserInput>;

    @Field(() => StaffCreateManyUserInputEnvelope, {nullable:true})
    createMany?: StaffCreateManyUserInputEnvelope;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    connect?: Array<StaffWhereUniqueInput>;
}
