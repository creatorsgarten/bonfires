import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyCreateNestedManyWithoutSquadInput } from '../duty/duty-create-nested-many-without-squad.input';
import { TaskCreateNestedManyWithoutSquadInput } from '../task/task-create-nested-many-without-squad.input';

@InputType()
export class SquadCreateWithoutRolesInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => DutyCreateNestedManyWithoutSquadInput, {nullable:true})
    duties?: DutyCreateNestedManyWithoutSquadInput;

    @Field(() => TaskCreateNestedManyWithoutSquadInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutSquadInput;
}
