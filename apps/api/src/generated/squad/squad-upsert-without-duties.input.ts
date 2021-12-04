import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadUpdateWithoutDutiesInput } from './squad-update-without-duties.input';
import { SquadCreateWithoutDutiesInput } from './squad-create-without-duties.input';

@InputType()
export class SquadUpsertWithoutDutiesInput {

    @Field(() => SquadUpdateWithoutDutiesInput, {nullable:false})
    update!: SquadUpdateWithoutDutiesInput;

    @Field(() => SquadCreateWithoutDutiesInput, {nullable:false})
    create!: SquadCreateWithoutDutiesInput;
}
