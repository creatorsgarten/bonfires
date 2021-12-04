import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateManyUserInput } from './staff-create-many-user.input';

@InputType()
export class StaffCreateManyUserInputEnvelope {

    @Field(() => [StaffCreateManyUserInput], {nullable:false})
    data!: Array<StaffCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
