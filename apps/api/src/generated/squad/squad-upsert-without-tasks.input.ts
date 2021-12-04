import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadUpdateWithoutTasksInput } from './squad-update-without-tasks.input';
import { SquadCreateWithoutTasksInput } from './squad-create-without-tasks.input';

@InputType()
export class SquadUpsertWithoutTasksInput {

    @Field(() => SquadUpdateWithoutTasksInput, {nullable:false})
    update!: SquadUpdateWithoutTasksInput;

    @Field(() => SquadCreateWithoutTasksInput, {nullable:false})
    create!: SquadCreateWithoutTasksInput;
}
