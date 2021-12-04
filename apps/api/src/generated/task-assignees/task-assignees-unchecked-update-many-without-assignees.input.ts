import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TaskAssigneesUncheckedUpdateManyWithoutAssigneesInput {

    @Field(() => Int, {nullable:true})
    staffId?: number;
}
