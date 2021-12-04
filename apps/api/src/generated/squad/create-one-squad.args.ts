import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SquadCreateInput } from './squad-create.input';

@ArgsType()
export class CreateOneSquadArgs {

    @Field(() => SquadCreateInput, {nullable:false})
    data!: SquadCreateInput;
}
