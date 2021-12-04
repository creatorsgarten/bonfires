import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManySquadInput } from './task-create-many-squad.input';

@InputType()
export class TaskCreateManySquadInputEnvelope {

    @Field(() => [TaskCreateManySquadInput], {nullable:false})
    data!: Array<TaskCreateManySquadInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
